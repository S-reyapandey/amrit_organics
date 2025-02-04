import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    image: null,
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [preview, setPreview] = useState(null);
  const quillRef = useRef();

  // Quill modules configuration
  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
      ],
    },
    clipboard: {
      matchVisual: false
    }
  };

  // Quill formats
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'align',
    'link', 'image'
  ];


  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("/api/post/create", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const newPostId = response.data._id;
      navigate(`/blogs/${newPostId}`);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "/api/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      localStorage.removeItem("adminToken");
      logout();
      navigate("/admin/login");
    } catch (err) {
      setError("Logout failed");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Create New Blog Post
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Author
              </label>
              <input
                type="text"
                name="author"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Enter author name"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            >
              <option value="uncategorized">Select a category</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Technology">Technology</option>
              <option value="Research">Research</option>
              <option value="Innovation">Innovation</option>
              <option value="Sustainability">Sustainability</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition h-24"
              required
              placeholder="Brief description of the post"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <ReactQuill
              theme="snow"
              ref={quillRef}
              placeholder="Write the content of the blog..."
              className="h-72 mb-12"
              required
              formats={formats}
              modules={modules}
              onChange={(value) => {
                setFormData({...formData, content: value});
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Featured Image
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-green-500 transition-colors">
              <div className="space-y-2 text-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mx-auto h-32 w-auto"
                  />
                ) : (
                  <div className="mx-auto h-32 w-32 flex items-center justify-center">
                    <svg
                      className="h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  className="sr-only"
                  required
                  _id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>Upload a file</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 flex items-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Post...
                </>
              ) : (
                "Create Post"
              )}
            </button>

            <button
              onClick={() => navigate("/admin/login")}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

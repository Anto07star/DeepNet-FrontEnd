import { useState } from "react";
import axios from "axios";



function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Food", // Default category
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://deepnet-backend-2s03.onrender.com/api/add-item", formData);
      alert(response.data.message);
      setFormData({ name: "", description: "", price: "", category: "Food" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add item");
    }
  };
 

  return (
    <div className="container m-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Add Menu Item</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
              //setFormData({ ...formData, name: e.target.value });


              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
          <label className="form-label">price</label>
          <input
              type="text"
              value={formData.price}
              onChange={(e)=>setFormData({...formData,price:e.target.value})}
              className="form-control"
              required
            />
            
          </div>

          <div className="mb-3">
          <label className="form-label">descrption</label>
          <input
              type="text"
              value={formData.description}
              onChange={(e)=>setFormData({...formData, description:e.target.value})}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
             
         
              className="form-select"
              required
            >
              <option value="Food">Food</option>
              <option value="Brunch">Brunch</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary w-100">
            Add Item
          </button>
    
      </div>
    </div>
  );
}

export default Admin;

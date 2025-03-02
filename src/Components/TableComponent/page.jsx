import React from "react";

const DogTable = () => {
  const data = [
    {
      id: 1,
      breed: "Bulldog",
      color: "Brindle",
      user_id: 1,
      age: 6,
      weight: "25kg",
      image_path: "uploads/1740898699252-image (1).png",
      createdAt: "2025-03-02 06:58:19",
      updatedAt: "2025-03-02 06:58:19",
    },
    {
      id: 2,
      breed: "Bulldog",
      color: "Brindle",
      user_id: 1,
      age: 6,
      weight: "25kg",
      image_path: "uploads/1740898793546-image (1).png",
      createdAt: "2025-03-02 06:59:53",
      updatedAt: "2025-03-02 06:59:53",
    },
    {
      id: 3,
      breed: "Bulldog",
      color: "Brindle",
      user_id: 1,
      age: 6,
      weight: "25kg",
      image_path: "uploads/1740898810009-istockphoto-18850881.jpg",
      createdAt: "2025-03-02 07:00:00",
      updatedAt: "2025-03-02 07:00:00",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Past Information</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Breed</th>
            <th className="border p-2">Color</th>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Weight</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Created At</th>
            <th className="border p-2">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dog) => (
            <tr key={dog.id} className="text-center">
              <td className="border p-2">{dog.id}</td>
              <td className="border p-2">{dog.breed}</td>
              <td className="border p-2">{dog.color}</td>
              <td className="border p-2">{dog.user_id}</td>
              <td className="border p-2">{dog.age}</td>
              <td className="border p-2">{dog.weight}</td>
              <td className="border p-2">
                <img src={dog.image_path} alt={dog.breed} className="w-12 h-12 object-cover mx-auto" />
              </td>
              <td className="border p-2">{dog.createdAt}</td>
              <td className="border p-2">{dog.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DogTable;

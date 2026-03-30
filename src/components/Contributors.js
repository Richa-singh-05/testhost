const users = [
  { name: "Marcus", ideas: 4 },
  { name: "Sarah", ideas: 5 },
  { name: "Priya S.", ideas: 4 },
  { name: "Robert K.", ideas: 5 },
  { name: "Elena", ideas: 3 },
];

function Contributors() {
  return (
    <div>
      {users.map((user, i) => (
        <div key={i} className="flex justify-between items-center mb-3">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              {user.name[0]}
            </div>

            <p>{user.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">{user.ideas}</span>

            {i === 1 && <span>👑</span>}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Contributors;
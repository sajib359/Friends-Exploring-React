

const Friend = (props) => {
   const{name,username} =props.friend
    return (
        
        <div className="text-3xl border-2 border-sky-500 bg-lime-50 rounded-md h-44 relative">
            <h2 className="text-2xl text-bold "> {name}</h2>
            <span>{username}</span>
            <div>
            <button className="bg-gray-400 tex-bold mx-auto absolute bottom-0">Address</button>
            </div>
            
        </div>
    );
};

export default Friend;
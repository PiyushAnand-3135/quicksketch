import Tools from "./Tools";

export default function Header(){
    return (
        <div>
             <Tools />
            <button className="fixed right-6 top-2 bg-green-500 text-white p-3 rounded-md shadow-md w-36 font-semibold">
        + Invite
      </button>
        </div>
        
    );
}

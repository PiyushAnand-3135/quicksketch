export default function Tools() {
  return (
    <>
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-10 bg-gray-950 border rounded-md p-4 shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-center gap-4 flex-wrap sm:gap-6 md:gap-8">
          <button className="text-white flex items-center">
            <img 
              src="pen.png"
              alt="pen"
              className="h-9 w-9"
            />
          </button>
          <button>
            <img 
              src="laser.png"
              alt="laser"
              className="h-9 w-9"
            />
          </button>
          <button className="text-white">
            <img 
              src="eraser.png"
              alt="erase"
              className="h-9 w-9"
            />
          </button>
          <button className="text-white">
            <img 
              src="save.png"
              alt="save"
              className="h-7 w-7"
            />
          </button>
          <button className="text-white">
            <img 
              src="undo-icon.svg"
              alt="undo"
              className="h-6 w-6"
            />
          </button>
          <button className="text-white">
            <img 
              src="redo-icon.svg"
              alt="redo"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </>
  );
}

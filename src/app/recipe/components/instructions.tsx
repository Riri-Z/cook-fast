export function Instruction({
  instructions,
  video,
}: Readonly<{
  instructions: string;
  video: string;
}>) {
  const arrInstructions = instructions.split('\n');

  return (
    <div className="card bg-base-200 flex w-full max-w-2xl flex-col justify-center shadow-2xl">
      <div className="card-body">
        <h1 className="card-title my-2 text-2xl">Instructions</h1>
        {arrInstructions.map((instruction, i) => (
          <span key={instruction + i} className="flex gap-2 text-lg">
            {instruction}
          </span>
        ))}
      </div>
      {/* Video */}
      {video && (
        <iframe
          title="test"
          className="p-4"
          src={video}
          allowFullScreen
          height={400}
        />
      )}
    </div>
  );
}

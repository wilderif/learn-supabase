export default function FileDragDropZone() {
  return (
    <section className="flex w-full flex-col items-center justify-center border-4 border-dotted border-indigo-700 py-20">
      <input type="file" className="" />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요</p>
    </section>
  );
}

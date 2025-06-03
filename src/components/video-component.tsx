export default async function VideoComponent() {
  const src = await getVideoSrc();

  return <iframe src={src} allowFullScreen />;
}

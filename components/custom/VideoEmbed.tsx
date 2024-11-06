interface VideoEmbedProps {
  url: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ url }) => (
  <div className="video-embed">
    <iframe src={url} title="Video del curso" allowFullScreen />
  </div>
);

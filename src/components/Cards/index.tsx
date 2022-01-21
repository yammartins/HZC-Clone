const Cards: React.FC = () => {
  <div key={id} className="box">
  <div className="box-banner">
    <img src={image} alt="imagem do vídeo" />
  </div>
  <div className="box-description">
    <div className="author">
      <cite className="font-normal text-leg text-grey">{author}</cite>
      <div className="author-profile">
        <img src={profile} alt="foto do autor" className="h-12 w-12 rounded-full flex-shrink" />
      </div>
    </div>
    <h2 className="text-h4 font-bold text-wt">{title}</h2>
    <span className="flex items-center gap-2 text-grey font-sans font-normal text-leg mt-6">
      <TimeIcon />
      33 minutos
    </span>
}

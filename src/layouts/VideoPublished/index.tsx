import { useState } from 'react';

import Modal from '~/components/Modal';

const VideoPublished: React.FC = () => {
  const [open, onOpen] = useState(false);

  return (
    <Modal name="Vídeo enviado" show={open} onShow={onOpen}>
      aaa
    </Modal>
  );
};

export default VideoPublished;

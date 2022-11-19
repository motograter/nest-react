const FormDnD = ({ onDrop, onClick }: { onDrop: (file: any) => void; onClick: () => file }) => {
    const { setValue } = useFormContext();
  
    const onFileDrop = (e: any) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setValue('file', e.dataTransfer.files);
      convert2Base64(file, onDrop);
    };
  
    return (
      <div
        className='dad__wait'
        onDrop={onFileDrop}
        onDragStart={(event) => event.preventDefault()}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className='dad__info' onClick={onClick}>
          <div className='dad__image'>
            <Icon name='cloud' />
          </div>
          <h3 className='dad__title'>Drag and drop your files here</h3>
          <p className='dad__text'>PDF (max. 1 mb)</p>
        </div>
      </div>
    );
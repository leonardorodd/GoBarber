import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { getData } from '../../../services/apifake';

import { Container } from './styles';

// useField é um hook para criar os próprios fields

export default function AvatarInput() {

  const { defaultValue, registerField } = useField('avatar');

  const [ file, setFile ] = useState(defaultValue && defaultValue.id);
  const [ preview, setPreview ] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
     if(ref.current) {
       registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
       })
     }
  }, [ref, registerField]);

  async function handleOnChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]); // [0] porque ele aceita vários arquivos 
    
    console.log(data.get('file'))

    var fr = new FileReader();
    
    fr.onload = function () {
      document.getElementById('pic').src = fr.result;
    }
    
    fr.readAsDataURL(e.target.files[0]);

    // const response = await api.post('/files', data)

    // const { id, url } = response.data;

    // setFile(id);
    // setPreview(url);
  }

  return (
    <Container>
        <label htmlFor="avatar">
            <img id="pic" src={preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt=""></img>
            <input 
                type="file" 
                id="avatar"
                accept="image/*"
                data-file={file}
                onChange={handleOnChange}
                ref={ref}
            />
        </label>
    </Container>
  );
}

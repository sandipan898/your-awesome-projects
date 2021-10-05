import { copyImageToClipboard } from 'copy-image-clipboard';
import { saveAs } from 'file-saver';
import { useState } from "react";



const Meme = ({ meme, setMeme }) => {
  const[hidebtn,setHidebtn]=useState(false)

  const[form,setForm]= useState({
    template_id:meme.id,
    username:"forLOL",
    password:"LTfW@6rXy7wX6gQ",
    boxes:[],
  });
  const generate=()=>{
    let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map((box,index)=>(
      url+=`&boxes[${index}][text]=${box.text}`
      ))
      fetch(url)
      .then(response=>response.json())
      
      .then((data)=> {
        if(data.success===true){
          setMeme({...meme,url: data.data.url})
          setHidebtn(true)
        }
      }); 
    };
    const handleDownload =()=>{
      saveAs(meme.url,meme.name);
     
    }
    const handleImageToClipboard =()=>{
      // saveAs(meme.url,meme.name);
      copyImageToClipboard(
        meme.url,
      )
        .then(() => {
          console.log('Image Copied')
        })
        .catch((e) => {
          console.log('Error: ', e.message)
        })

    }
  return (
    <div className="meme-conatainer">
      <div className="meme">
        <h3>MEME edit karlo frnds</h3>
        <img src={meme.url} alt="" />
      </div>

      {[...Array(meme.box_count)].map((_, index) => (
        <input key={index} type="text" placeholder={`caption ${index + 1}`} onChange={(e)=>{
          const newbox=form.boxes
          newbox[index]={text: e.target.value};
          setForm({...form, boxes:newbox})  
          // form={target.value}
        }}/>
      ))}
      <div>
        <button onClick={generate}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >Return to Choose Template</button>
      </div>
      { hidebtn &&
      <div>
      <button onClick={handleDownload}>DOWNLOAD</button>
      <button onClick={handleImageToClipboard}>Copy Image To Clipboard</button>
      </div>}
    </div>
  );
};

export default Meme;

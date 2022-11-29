import React,{ useState ,useRef} from 'react';
import Style from './Home.module.scss';
import me from '../../img/aminos.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import {Button} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { createTheme } from '@mui/material/styles';
import Resume from '../../pdf/AmineDouiriCVEnglish.pdf'
import InboxIcon from '@mui/icons-material/Inbox';
import emailjs from '@emailjs/browser';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {InfoContainer,ContactForm,ContactFormTextarea,FormWrap,
   ContactFormLabel,Column2,ContactFormInput,InfoWrapper,InfoRow,
   Column1,TextWrapper,TopLine,ContactFormButton,Heading,Subtitle} from './ContactForm'

import {ToastContainer, toast } from 'react-toastify';

const theme = createTheme({
   palette: {
     
     secondary: {
       // This is green.A700 as hex.
       main: '#11cb5f',
     },
   },
 });
export default function Home() {
   const style = {
      position: 'absolute' ,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius : '30px',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };
   const [visible, setVisible] = useState(false)
   const form = useRef();
   const [user_name ,user_namesetInput] = useState(''); // '' is the initial state value
   const [user_email,user_emailsetInput] = useState(''); // '' is the initial state value
   const [message,messagesetInput] = useState(''); // '' is the initial state value
   let disabled=false
   const handleClose = () => setVisible(false);

   const sendEmail = (e) => {

      e.preventDefault();
      if(user_name===""||user_email===""||message===""){
          toast.error("Please dont't leave blank field")
      
      }else {
          disabled=true
          const id = toast.loading("Please wait...")

          emailjs.sendForm('service_t60z6ef', 'template_6at93qb', form.current, 'user_9wM1hUOxAToDR878fNETs')
          .then((result) => {
              toast.update(id, { render: "Email sent", type: "success", isLoading: false });
              toast.dismiss()
              disabled=false
              user_namesetInput("")
              user_emailsetInput("")
              messagesetInput("")
          }, (error) => {
              disabled=false
              toast.update(id, { render: "Something went wrog", type: "error", isLoading: false });
              toast.dismiss()
              user_namesetInput("")
              user_emailsetInput("")
              messagesetInput("")
          });
      }

     
    };
   const onDownload = () => {
      const link = document.createElement("a");
      link.download = `AmineDouiriCVEnglish.pdf`;
      link.href = Resume;
      link.click();
    };
    const onContact = ()=>{
setVisible(true)
    }
   return (
      
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <ToastContainer position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnHover />
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>

            <Box component={'ul'} p={'0.8rem'} >
            <Button variant="contained" onClick={onDownload} sx={{
    color: 'white',
    background: 'linear-gradient(to right bottom, #6B0AC9, #36EAEF)',
  }} color="secondary" endIcon={<PictureAsPdfIcon />}>
               Download my resume
               </Button>           
               </Box>
              
               <Box component={'ul'} p={'0.8rem'} >
            <Button variant="contained" shape="round" onClick={onContact}  sx={{
               background: 'linear-gradient(to right bottom, #A668FF, #00FFA4)',
            }} color="secondary" endIcon={<InboxIcon />}>Contact me</Button>           
            </Box>
            
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={visible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <Box sx={style}>
       
      <InfoContainer id="contact"> 
                  
    <InfoWrapper>
        <InfoRow >
            <Column1>
                    
          
            
                <FormWrap >
            <ContactForm ref={form} onSubmit={sendEmail}>
      <ContactFormLabel>Name</ContactFormLabel>
      <ContactFormInput  value={user_name} onInput={e => user_namesetInput(e.target.value)} type="text" name="user_name" />
      <ContactFormLabel>Email</ContactFormLabel>
      <ContactFormInput value={user_email} onInput={e => user_emailsetInput(e.target.value)} type="email" name="user_email" />
      <ContactFormLabel>Message</ContactFormLabel>
      <ContactFormTextarea value={message} onInput={e => messagesetInput(e.target.value)} name="message" />
      <ContactFormButton type="submit" disabled={disabled} value="Send" />
    </ContactForm>
    </FormWrap>
            </Column1>
            <Column2>
            <TextWrapper>
                    <TopLine>Contact me</TopLine>
                    <Heading>Send me an email</Heading>
                    <Subtitle>Contact us to get a free estimation for your work .

</Subtitle>
                
                </TextWrapper>
            </Column2>
        </InfoRow>
    </InfoWrapper>
  </InfoContainer>
          </Box>
        </Fade>
      </Modal>

            <Box display={'flex'} gap={'1.5rem'}  fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
            
         </Box>
      </Box>
   )
}
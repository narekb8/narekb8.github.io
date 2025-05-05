import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects(props) {
    const items = props.items;
    const toReturn = items?.map((item) => 
      <div className='single-proj' key={item.text}>
        <div className='front-proj'>
          <div className='image'>
            <img src={item.img} alt='' />
          </div>
          <h5>
            {item.text}
          </h5>
          <p>
            {item.desc}
          </p>
          <a href={item.link} target="_blank" rel="noreferrer"><GitHubIcon className='proj-icons' sx={{ fontSize: 50 }} /></a>
        </div>
      </div>
    );

    return toReturn;
}
import './App.css';

export default function Skills(props) {
    const items = props.items;

    const toReturn = items?.map((item) => 
        <div className='skill' key={item.text}>
            <div className='skill-img' style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', backgroundImage: `url(${item.img})` }}></div>
            <div className='skill-text'>{item.text}</div>
        </div>
    );

    return toReturn;
}
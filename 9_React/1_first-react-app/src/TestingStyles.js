import './TestingStyles.css';

function CardStyles() {

  const blogObj = {
    title: 'Lorem Ipsum',
    description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious"
  }

  const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0 2px 5px #ccc'
  }
  
  return (
      <div className="TestingStyles">
        {/* Inline Styles */}
        <div style={styles}>
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
        {/* Using styles in CSS file */}
        <div className='card'>
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
      </div>
    );
  }
  
  export default CardStyles;
  
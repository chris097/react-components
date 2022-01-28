// import card from '../images/header-image (9).png'

const Cards = () => {
  // function fullName(name) {
	// 	const parts = name?.split(' ');
	// 	let initial = '';
	// 	parts?.forEach((part) => {
	// 		initial += part?.charAt(0,10);
	// 	});
	// 	return initial ? initial : <span className="text-lg">?</span>;
	// }

  function text(content){
    const sliceStr = content.slice(0, 136)
    return sliceStr ? sliceStr : 'empty content'
  }
  console.log(text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem bibendum gravida eget vitae purus odio nunc. Amet, odio viverra tincidunt quisque in et ac. Sagittis tincidunt et dolor at dignissim. At turpis magnis turpis eu vel. Pulvinar quam maecenas in vulputate mauris id urna. In adipiscing fusce molestie et praesent nunc, accumsan. In sem quis donec sit turpis. Mattis et posuere donec et nec aliquet ultricies vestibulum. Ac sit nisi dolor nisl, feugiat hac mi, sem. Faucibus ut ultrices dictumst blandit quis nullam bibendum pellentesque. Vulputate cras cras sociis amet, egestas sagittis. Non, lorem a nibh neque mattis. Consectetur facilisis sed porta tristique. Cras et porttitor nec at malesuada tempus. Donec sociis tincidunt commodo vel nunc nullam placerat tristique. Neque ac tristique viverra erat ultrices neque, aliquet feugiat velit. Malesuada eu sed vulputate enim turpis etiam aliquam. Vitae felis pellentesque egestas ut mus enim, enim amet.'))
  return(
    <div>
      <div className="card">
        <div className="rl">
        <div className="card-a">
        <div className="card-container">
          <p className="card-title">Card name</p>
          <div className="card-cover"></div>
        </div>
        </div>
        <div>do something here</div>
        </div>
       <div className="rl-one">
       <div className="card-b">
       <div className="card-container-one">
         <p className="card-title">Card name</p>
         <div className="card-cover"></div>
       </div>
     </div>
     <div>do something here</div>
       </div>
      </div>
      <div className="card">
        <div className="card-a">
          <div className="card-container-two">
            <p className="card-title">Card name</p>
            <div className="card-cover"></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cards;
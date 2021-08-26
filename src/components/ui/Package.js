export default function Package(props) {
  const { platform, name, description, homepage, keywords } = props.details;

  function getKeyWordString(words) {
    return words.map((word, i, arr) => {
      // if you are not on the last word
      if (i < arr.length - 1) {
        return word + ", ";
      }
      //  on the last word in the array
      else return word;
    });
  }

  return (
    <div className="">
      <h1 className="mt-5">
        {platform} / {name}
      </h1>
      <p>{description}</p>

      <p>{getKeyWordString(keywords)}</p>
      <a href={homepage} target="blank" rel="noopener noreferrer">
        {homepage}
      </a>
    </div>
  );
}

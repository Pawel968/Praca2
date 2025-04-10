import './App.css'

function App() {
  
const num = 8;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <p>
        {arr.map((liczba) => {
          return (
            <div>
              {liczba} * {num} = {num * liczba}
            </div>
          );
        })}
      </p>
    </>
  )
}

export default App

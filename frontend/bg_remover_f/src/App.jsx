import Form from './Form';

function App() {

 
  return (
    <div className="App">
      

      <header className="App-Header">
        <strong>Image Background Remover</strong>
      </header>

      <main className="App-Main">
        <section className="card">
          <h1>Welcome to the Jayethian Background Remover App</h1>
          <h2>Remove Backgrounds in Seconds – Fast, Easy & Free!</h2>
          <p>Jayethian Background Remover is your go-to solution for effortlessly removing backgrounds from images with just a few clicks. Whether you're a designer, marketer, photographer, or just someone looking to refine an image, our AI-powered tool ensures precision and speed.</p>
        </section>

        <section className="card" >
          <h2>Upload Image</h2>
          <Form/>
        </section>

        
        
      </main>

      <footer className='App-Footer'>
          <p>&copy;2025 Image Background Remover</p>
          <p>Jayethian Projects</p>
      </footer>
    </div>
  );
}

export default App;

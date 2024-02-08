import config from "./config/config"

function App() {

  console.log(config.appwriteBucketId)

  return (
    <div className='text-center my-5'>
      <p className='text-2xl font-bold'>Blog Project using Appwrite</p>
    </div>
  )
}

export default App

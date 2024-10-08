import './styles/Form.scss'


const Form = () => {
  return (
    <section className='form'>
      <h2 className='form_title'>Introduce tus datos de nacimiento exactos para descubrir tu signo lunar</h2>
      <form action="" className='form_container'>
        <div className='form_container-input'>
          <label htmlFor="name">Name</label>
          <input type="text" name="Name" id="name" />
        </div>
        <div className='form_container-input'>
          <label htmlFor="dob">Date of birth</label>
          <input type="date" name="DOB" id="dob" />
        </div>
        <div className='form_container-input'>
          <label htmlFor="tob">Time of birth</label>
          <input type="time" name="TOB" id="tob" />
        </div>
        <div className='form_container-input'>
          <label htmlFor="pob">Place of birth</label>
          <input type="text" name="POB" id="pob" />
        </div>
      </form>
    </section>
  )
}

export default Form
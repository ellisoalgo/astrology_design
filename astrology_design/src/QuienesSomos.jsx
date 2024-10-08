import './styles/QuienesSomos.scss'

function QuienesSomos() {
  return (
    <section className='quienes'>
        <div className='quienes_info'>
            <p className='quienes_info-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis praesentium neque consequuntur omnis doloremque quam sequi dolores. Impedit commodi recusandae quo, labore voluptates a fugiat nihil atque nemo consectetur unde.
            Reiciendis ducimus perferendis optio est cumque culpa? Eaque eius neque illo accusantium earum harum omnis repellendus inventore voluptatum aut sequi facere nemo architecto quod, quaerat in? Nisi illum odit accusamus.</p>
            <h2 className='quienes_info-title'>Quiénes Somos</h2>
        </div>
        <div className='quienes_services'>
            <h3 className='quienes_services-title'>Qué ofrecemos</h3>
            <div className='quienes_services-group'>
              <div className='quienes_services-group--service'>
                  <img src="https://placehold.jp/150x150.png" alt="" className='quienes_services-group--service__img'/>
                  <p className='quienes_services-group--service__text'>Service 1</p>
              </div>
              <div className='quienes_services-group--service'>
                  <img src="https://placehold.jp/150x150.png" alt="" className='quienes_services-group--service__img'/>
                  <p className='quienes_services-group--service__text'>Service 2</p>
              </div>
              <div className='quienes_services-group--service'>
                  <img src="https://placehold.jp/150x150.png" alt="" className='quienes_services-group--service__img'/>
                  <p className='quienes_services-group--service__text'>Service 3</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default QuienesSomos
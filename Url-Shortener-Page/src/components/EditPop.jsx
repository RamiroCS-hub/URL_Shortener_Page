import { UserLink } from './UserLink'
export const EditPop = ({ data, handleEdit }) => {
  const handleSave = () => {
    const text = document.querySelector('.edit-pop span').textContent
    console.log(text)
    handleEdit(text, data.id)
  }
  return (
    <>
      <div className='edit-pop-container'></div>
      <div className='edit-pop'>
        <div>
          <h3>{data.shortenUrl}</h3>
          <span contentEditable={true}>{data.originalUrl}</span>
        </div>
        <button onClick={() => handleSave()}>SAVE</button>
      </div>
    </>
  )
}

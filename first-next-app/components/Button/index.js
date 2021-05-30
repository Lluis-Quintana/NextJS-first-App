import color from '../../styles/theme'

export default function Button ({children, onClick}) {
  return (
    <>
    <button onclick={onClick}>
      {children}
    </button>
    <style jsx>{`
      button{
        padding:0.5rem 1rem;
        margin-top:1rem;
        background-color: ${color.primary};
        border:none;
        border-radius:9999px;
        color:white;
        font-weight:bold;
        cursor:pointer;
        transition: all .3s ease;
        display:flex;
        align-items:center;
      }  
      button:hover{
        background:${color.secondary}
      }

    `}</style>
    </>
  )
}
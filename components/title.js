export default function Title({children}) {
  return (
    <h1>
      {children}
      <style jsx>
        {`
          h1 {
            margin: 0;
            font-size: 3rem;
            text-align: center;
          }
        `}
      </style>
    </h1>
  )
}
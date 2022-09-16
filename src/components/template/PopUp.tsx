type HorizPos = 'left' | 'center' | 'right'
type VerticPos = 'top' | 'center' | 'bottom'

type PopUpProps = {
  position:
    | Exclude<`${HorizPos}-${VerticPos}`, 'center-center'>
    | 'center'
}

export const PopUp = ({ position }: PopUpProps) => {
  return <div>PopUp Position - {position}</div>
}

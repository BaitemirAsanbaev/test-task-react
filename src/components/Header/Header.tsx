import classes from './Header.module.scss'

type Props = {
    title:string
}

export default function Header({title="Users list"}: Props) {
  return (
    <div className={classes.Header}>{title}</div>
  )
}
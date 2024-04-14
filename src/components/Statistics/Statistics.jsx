import css from './Statistics.module.css';

export const Statistics = (props) => {
  return (
    <section className={css.statistics}>
      <h2 classNameme={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {props.stats.map((stat) => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
 
  </ul>
</section>
  )
}
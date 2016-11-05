import React from 'react'

const { string } = React.PropTypes

const RepoItem = (props) => {
  let demo = null

  if (props.demopath) {
    demo = <a href={props.demopath}>Demo</a>
  }

  return (
    <div className='repo-item'>
      <h3><a href={props.repopath}>{props.title}</a></h3>
      <p>{props.desc}</p>
      {demo}
    </div>
  )
}

RepoItem.propTypes = {
  title: string,
  repopath: string,
  desc: string,
  demopath: string
}

export default RepoItem

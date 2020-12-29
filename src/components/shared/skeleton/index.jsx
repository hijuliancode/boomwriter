import React from 'react'
import styled from 'styled-components'

const SkeletonElm = styled.div`
  ${props => props.theme.skeleton}
`

const Skeleton = () =>(
  <SkeletonElm className="Skeleton"></SkeletonElm>
)

export default Skeleton

import PagedetailesBanner from '@/app/Components/PagedetailesBanner/PagedetailesBanner'
import { ProjectGallery } from '@/app/Components/ProjectGallery/ProjectGallery'
import ProjectOverview from '@/app/Components/ProjectOverview/ProjectOverview'
import React from 'react'

const page = () => {
  return (
    <div>
    <PagedetailesBanner/>  
    <ProjectOverview/>
    <ProjectGallery/>  
    </div>
  )
}

export default page
import React from 'react'
import { Container } from '@mui/material'
import Footer from './Footer/Footer'


export default function Layout({children}) {
    return (
        <>
            <Container maxWidth="1100px" margin="auto">
                
                
                <main>
                    {children}
                </main>
               
            </Container>
        </>
    
  )
}

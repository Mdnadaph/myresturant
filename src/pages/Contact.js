
import React from 'react'
import Layout from '../components/layout/Layout'
import {Button, Card, CardContent, Grid,  TextField, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
{/* divided into two part from bootstrp */}
      <section id='header' className='d-flax align-items-center '>
     <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='main_h1'>
                Hello,<br /><strong className='brand_name'>We are ready to take your order</strong>
            </h1>

            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Culpa fuga neque fugiat explicabo consequuntur, provident dolor? 
            Reprehenderit quae maiores harum voluptas, asperiores provident eos 
            fuga officiis distinctio odit optio debitis suscipit et numquam sequi 
            eum repellat at rerum vitae corrupti culpa? Eaque odit dolorem, debitis
            nihil ipsa reiciendis omnis deleniti quis, aliquam iste architecto aperiam 
            sint quae earum enim? Accusamus corporis, facilis nemo ut voluptates, totam delectus 
            iure consequatur aperiam atque, et optio officiis! Mollitia accusantium iusto asperiores,
            cumque, quasi suscipit officia molestias quo rerum ducimus quidem id! Esse, vitae fugit. 
            Dignissimos eaque aspernatur repellendus sed, at iure sint exercitationem.</h5>


            </div>   
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
{/* main form start from here in materail ui */}
      <Typography sx={{color:'#9f3c96', fontWeight:'bold'}} variant='h4' align='center' mt={3}>
        Contact Us Our Resturant
      </Typography>
      <Card style={{maxWidth:'450', margin:"0 auto", marginBottom:50}}>
        <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder='Enter First Name' fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder='Enter Last Name' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField type='email' label="Email" placeholder='Enter email' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField type='number' label="Phone" placeholder='Enter Phone' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField  label="Message" multiline rows={7} placeholder='Type Our Message Here' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <Button sx={{bgcolor:"#9f3c96"}} type='submit' variant='contained' fullWidth>Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>

      </div>        
      </div>
      </div>
      </div>
    </div>
  </section> 
    </Layout>
  )
}

export default Contact

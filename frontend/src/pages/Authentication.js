import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }){
  const searchParams = new URL(request.url).searchParams;

  // console.log(searchParams.get('mode'))
  const mode = searchParams.get('mode') || 'login';
  console.log(mode)
  if( mode !== 'signup' && mode !== 'login'){
    throw new Response({message: 'undefined mode'}, {status: 422})
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch('http://localhost:8080/'+ mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw new Response({message: 'Could not authenticate user....'}, {status: 500})
  }


  return redirect('/')

}
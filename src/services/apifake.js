export function getData(success, operationType, data){
    
    const delay = 5000;

    switch(operationType){
        case '/login' :
            return new Promise((resolve, reject)=> {
                setTimeout(() => {
                if(success){
                    resolve({
                    data: {
                            token: 'jkhuisehrseufhsufhilushfldshulfhshlkfhlksdhlfhlksdhlfhkljsdlkfjdlsfjlk',
                            user: {
                            provider: true,
                            nome: 'Leonardo Rodrigues',
                            email: 'lalalal@lalala.com',
                            avatar: {
                                url: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                        }
                    }
                    })
                }else{
                    reject('Login Error')
                }
                }, delay);
            });
        case '/notification' :
            return new Promise((resolve, reject)=> {
                setTimeout(() => {
                if(success){
                    resolve({ 
                        data : [
                        {
                                
                                read: true,
                                id: 2,
                                content: 'novo agendamento para dia 24 de Abril, às 21:00h.',
                                user: 'Marcela',
                                createdAt: '2020-04-09T01:03:59.445Z', 
                                updatedAt: '2019-07-10T16:28:27.027Z',
                            
                        },
                        {
                            
                                read: false,
                                id: 3,
                                content: 'novo agendamento para dia 25 de Abril, às 0:00h.',
                                user: 'Leonardo',
                                createdAt: '2019-04-24T19:15:56.112Z', 
                                updatedAt: '2019-04-24T19:15:56.112Z',
                            
                        },
                        {
                                read: false,
                                id: 4,
                                content: 'novo agendamento para dia 24 de Abril, às 21:00h.',
                                user: 'Marcos',
                                createdAt: '2019-04-24T17:59:07.799Z', 
                                updatedAt: '2019-07-24T17:59:07.799Z',
                            
                        },
                        {
                            read: false,
                            id: 5,
                            content: 'novo agendamento para dia 24 de Abril, às 21:00h.',
                            user: 'Marcos',
                            createdAt: '2019-04-24T17:59:07.799Z', 
                            updatedAt: '2019-07-24T17:59:07.799Z',
                        
                         }              
                    ]})
                }else{
                    reject('Notification Error')
                }
                }, delay);
            });

            case '/users' :
                return new Promise((resolve, reject)=> {
                    setTimeout(() => {
                    if(success){

                        const { nome, email, ...rest } = data;

                        resolve({
                        data: {
                            user: Object.assign( { nome, email }, rest, { avatar: { url: 'https://api.adorable.io/avatars/50/abott@adorable.png', id: 1} })
                        }
                        })

                    }else{
                        reject('Update Error')
                    }
                    }, delay);
                });

            case '/schedule' :
                return new Promise((resolve, reject)=> {
                    setTimeout(() => {
                    if(success){
                        resolve([
                            {
                                    
                                user: {
                                    name: 'Leonardo',
                                },
                                date: '2020-04-11T13:00:00.000Z',
                            
                                
                            },
                            {
                                
                                user: {
                                    name: 'Maria',
                                },
                                date: '2020-04-11T14:00:00.000Z',
                                
                            }          
                        ])
                    }else{
                        reject('Update Error')
                    }
                    }, delay);
                });
        
        default:
    }    

   
  }
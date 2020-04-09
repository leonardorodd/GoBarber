export function getData(success, operationType){
    
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
                        email: 'lalalal@lalala.com'
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
                    resolve({ data : [
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
        default:
    }    

   
  }
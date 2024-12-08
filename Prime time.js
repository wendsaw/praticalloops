let primenumber = 4
for (let i= 2; i <= 100; i++) {
    if( primenumber>1 & primenumber%primenumber==0 & !(primenumber%i==0))
        {
        console.log(`this number ${primenumber} is prime`);
        
        break;
    }
    
    primenumber+=1;

    }
    

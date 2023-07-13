export const stepsConfig = [
    {
        element: 'body',
        popover: {
            title: 'WebGIS tour',
            description: 'Velkommen til en guidet tour i Slagelse kommunes WebGIS - Spatial Suite!',
            position: 'mid-center'
        }
    },
    {
        element: '#tool-menu',
        popover: {
            title: 'Værktøjer',
            description: 'Her finder du en masse værktøjer, som kan bruges til at analysere på data.',
            position: 'right'
        },
        onNext: () => {
            alert('testeeeeer')
        }
    },
    {
        element: '#panel-themes',
        popover: {
            title: 'Temavælgeren',
            description: 'Det her er Temavælgeren. Her kan du finde alle de temaer, som er tilgengælige!',
            position: 'right'
        }
    },
    {
        element: '#panel-themes-header',
        popover: {
            title: 'Temavælgeren',
            description: 'Med de her knapper kan du åbne temabiblioteket, åbne alle temagrupper med et tændt tema eller lave dit eget tema eller skitse',
            position: 'right'
        }
    },
    {
        element: '#theme_store_setting',
        popover: {
            title: 'Temabiblioteket',
            description: 'Åbn temabiblioteket og søg efter det datasæt, som du vil se i kortet',
            position: 'right'
        }
    },
    {
        element: '#mapcontainerSearch',
        popover: {
            title: 'Søgefelt',
            description: 'Her kan du søge efter adresser, stednavne eller matrikler. Hvis du vil søge efter matrikler, så husk at angive det ejerlav, matriklen ligger i.',
            position: 'left'
        }
    },
    {
        element: 'body',
        popover: {
            title: 'Tak for nu!',
            description: 'HUSK, at du ikke kan ødelægge noget, så du kan rolig prøve dig frem :) Hvis du har nogen som helst spørgsmål eller har lyst til at vide mere, så er du velkommen til at kontakte os i GIS ved at klikke HER',
            position: 'mid-center'
        }
    }
]
import appointment_img from './appointment_img.png'
import header_img from './header_img.jpg'
import barberHeader from './barberHeader.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import barber_bada from './barber_bada.png'
import barber_pedro from './barber_pedro.png'
import barber_vini from './barber_vini.png'
import barber_vand from './barber_vand.png'
import barbearia from './barbearia.png'
import corteBarba from './corteBarba.png'
import navalha from './navalha.png'
import tesoura from './tesoura.png'

export const assets = {
    appointment_img,
    header_img,
    barberHeader,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Corte de Cabelo',
        image: barbearia
    },
    {
        speciality: 'Aparar Barba',
        image: corteBarba
    },
    {
        speciality: 'Barba',
        image: navalha
    },
    {
        speciality: 'Corte Infantil',
        image: tesoura
    },
]

export const barbers = [
    {
        _id: 'barber1',
        name: 'Pedro Guilherme',
        image: barber_pedro,
        experience: '1 ano',
        speciality: 'Corte de Cabelo',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum architecto amet cum esse laudantium praesentium, ipsam neque nam expedita doloremque nisi quasi! Minima perspiciatis recusandae in ducimus nam id?',
        fees: 35,
        address: {
            line1: 'Lorem Ipsum ',
            line2: 'Lorem, Ipsum'
        }
    },
    {
        _id: 'barber2',
        name: 'Vinicius Maximo',
        image: barber_vini,
        experience: '3 anos',
        speciality: 'Aparar Barba',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum architecto amet cum esse laudantium praesentium, ipsam neque nam expedita doloremque nisi quasi! Minima perspiciatis recusandae in ducimus nam id?',
        fees: 30,
        address: {
            line1: 'Lorem Ipsum ',
            line2: 'Lorem, Ipsum'
        }
    },
    {
        _id: 'barber3',
        name: 'Henrique Soares',
        image: barber_bada,
        experience: '2 anos',
        speciality: 'Barba',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum architecto amet cum esse laudantium praesentium, ipsam neque nam expedita doloremque nisi quasi! Minima perspiciatis recusandae in ducimus nam id?',
        fees: 30,
        address: {
            line1: 'Lorem Ipsum ',
            line2: 'Lorem, Ipsum'
        }
    },
    {
        _id: 'barber4',
        name: 'Vanderlei Elias',
        image: barber_vand,
        experience: '1 ano',
        speciality: 'Corte Infantil',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum architecto amet cum esse laudantium praesentium, ipsam neque nam expedita doloremque nisi quasi! Minima perspiciatis recusandae in ducimus nam id?',
        fees: 45,
        address: {
            line1: 'Lorem Ipsum ',
            line2: 'Lorem, Ipsum'
        }
    },
]
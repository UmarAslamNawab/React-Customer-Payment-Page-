import './scss/index.scss'
import { BsArrowReturnRight } from 'react-icons/bs';
import UK from '../../assets/images/uk1.svg'
import Norska from '../../assets/images/Norska.svg'
import Svenska from '../../assets/images/Svenska.svg'
import Qliro from '../../assets/images/Qliro.svg'
import Trustly from '../../assets/images/Trustly.svg'
import AMEX from '../../assets/images/AMEX.png'
import VISA from '../../assets/images/VISA.png'
import Paypal from '../../assets/images/Paypal.png'

const data = [
    {
        order_number: 1234567890,
        created: "05 maj, 12:33",
        store: "Butik X",
        payment_method: "Invoice",
        payment_status: "Paid",
        amount: 2160,
        status: "Online",
        country: UK,
        card: Qliro
    },
    {
        order_number: 1234567891,
        created: "06 maj, 12:33",
        store: "Butik Z",
        payment_method: "Card, •••• 3434",
        payment_status: "In Progress",
        amount: 2160,
        status: "Invoice",
        country: Norska,
        card: AMEX
    },
    {
        order_number: 1234567892,
        created: "07 maj, 12:33",
        store: "Butik Y",
        payment_method: "Card, •••• 3434",
        payment_status: "Failed",
        amount: 2160,
        status: "Manual",
        country: Svenska,
        card: VISA
    },
    {
        order_number: 1234567890,
        created: "05 maj, 12:33",
        store: "Butik X",
        payment_method: "Invoice",
        payment_status: "Paid",
        amount: 2160,
        status: "Online",
        country: UK,
        card: Paypal
    },
    {
        order_number: 1234567891,
        created: "06 maj, 12:33",
        store: "Butik Z",
        payment_method: "Card, •••• 3434",
        payment_status: "In Progress",
        amount: 2160,
        status: "Invoice",
        country: Norska,
        card: Trustly
    },
]


function Table() {
    return (
        <div>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col" ></th>
                        <th scope="col">Order number</th>
                        <th scope="col">Created</th>
                        <th scope="col">Store</th>
                        <th scope="col">Payment method</th>
                        <th scope="col">Payment status</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td className="status_box">
                                    <div className={"rotate_box " + v.status}>
                                        {v.status}
                                    </div>
                                </td>
                                <td className="color_green">{v.order_number} <BsArrowReturnRight /></td>
                                <td>{v.created}</td>
                                <td><img className="flag_pic" src={v.country} alt="" />{v.store}</td>
                                <td><img className="card_pic" src={v.card} alt="" />{v.payment_method}</td>
                                <td><div className={v.payment_status.replace(" ", "-")} />{v.payment_status}</td>
                                <td>{v.amount} kr</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <div className="pagination">
                    <div>
                        <span className="light-text bold">Back</span>
                    </div>
                    <div className="page_circle page_circle_active">
                        1
                    </div>
                    <div className="page_circle">
                        2
                    </div>
                    <div>
                        <span className="color_green bold">Next</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
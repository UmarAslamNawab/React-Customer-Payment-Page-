import { NavBar, Table } from "../../components";
import { HiOutlineMail } from 'react-icons/hi';
import { BsTruck, BsInfoCircle } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';
import './scss/index.scss'

function Customer() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="pv-30 d-flex justify-content-lg-around flex-wrap">
                    <div>
                        <div className="info_head d-flex align-items-center">
                            <HiOutlineMail size={22} />
                            <span>Contact Anna</span>
                        </div>
                        <div className="mt-10">
                            <div>
                                annaanne@qliro.com
                            </div>
                            <div>
                                +46721234567
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info_head d-flex align-items-center">
                            <BsTruck size={22} />
                            <span>Shipping address</span>
                        </div>
                        <div className="mt-10">
                            <div className="info_address">
                                Qlirovagen 123,
                                12345 Stockholm, Sweden
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info_head d-flex align-items-center">
                            <RiBillLine size={22} />
                            <span>Invoice Address</span>
                        </div>
                        <div className="mt-10">
                            <div className="info_address">
                                Qlirovägen 123,
                                12345 Stockholm, Sweden
                            </div>

                        </div>
                    </div>
                </div>
                <div className="light_line" />
                <div className="pv-30">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4>Anna's orders</h4>
                        <div className="help">
                            <BsInfoCircle size={18} color="grey" />
                            <span>Help</span>
                        </div>
                    </div>
                </div>
                <div className="pb-30">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Customer;
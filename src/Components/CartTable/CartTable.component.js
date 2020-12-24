import React from 'react';

import { pans2 } from '../../res/img';
import styles from './CartTable.module.css';

const CartTable = () => {
    return (
            <div className={styles.cartSeparator}>
                <h1 className={styles.cartListBaker}>Baker: James Hardy</h1>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Product</td>
                        <td className={styles.cartTableHeaderData}>Price</td>
                        <td className={styles.cartTableHeaderData}>Quantity</td>
                        <td className={styles.cartTableHeaderData}>Total</td>
                    </thead>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer]}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <p>Ice Cake</p>
                        </td>
                        <td className={styles.cartTableData}>3000</td>
                        <td className={styles.cartTableData}>3</td>
                        <td className={styles.cartTableData}>9000</td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer]}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <p>Ice Cake</p>
                        </td>
                        <td className={styles.cartTableData}>40000</td>
                        <td className={styles.cartTableData}>4</td>
                        <td className={styles.cartTableData}>160,000</td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td colSpan="2" className={[styles.cartTableData, styles.cartCoupon]}>
                            <input type="text" placeholder="Coupon Code" className={styles.cartCouponInput} /> 
                            <button className={styles.cartButton}>Apply</button>
                        </td>
                        <td colSpan="1" className={[styles.cartTableData, styles.cartCoupon]}><button className={styles.cartButton}>Order</button></td>
                        <td colSpan="1" className={styles.cartTableData}>Total: 169,000</td>
                    </tr>
                </table>
            </div>
    )
}

export default CartTable;
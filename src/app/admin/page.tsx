import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './Admin.module.css';

export default function AdminDashboard() {
    return (
        <>
            <Navbar />
            <main className={styles.admin}>
                <div className="container">
                    <header className={styles.header}>
                        <h1>Admin Dashboard</h1>
                        <div className={styles.stats}>
                            <div className={styles.statCard}>
                                <h3>Total Orders</h3>
                                <p>124</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Total Revenue</h3>
                                <p>Rs. 842,000</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Products</h3>
                                <p>42</p>
                            </div>
                        </div>
                    </header>

                    <section className={styles.content}>
                        <div className={styles.tabs}>
                            <button className={styles.activeTab}>Orders</button>
                            <button>Inventory</button>
                            <button>Customers</button>
                        </div>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Product</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: '#AB1024', name: 'Ali Khan', product: 'Premium Cotton Navy', status: 'Processing', total: 6500 },
                                        { id: '#AB1023', name: 'Zaid Ahmed', product: 'Lustrous Boski', status: 'Shipped', total: 9500 },
                                        { id: '#AB1022', name: 'Usman Malik', product: 'Wash & Wear Grey', status: 'Delivered', total: 4800 },
                                    ].map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.product}</td>
                                            <td><span className={styles.statusBadge}>{order.status}</span></td>
                                            <td>Rs. {order.total}</td>
                                            <td><button className={styles.editBtn}>View</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

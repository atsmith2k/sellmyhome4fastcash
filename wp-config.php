<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eliter_wp452' );

/** MySQL database username */
define( 'DB_USER', 'eliter_wp452' );

/** MySQL database password */
define( 'DB_PASSWORD', 'p[J5-3S23s' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cxpecblpcupnhtbif88lxmkkdmlsikzjnkgltetxs5gzky7orazxa7cwkbqpcbur' );
define( 'SECURE_AUTH_KEY',  'r9j64sjpqgppulgo0huk9msasxb4jyzmdktomrqjdp4cosvkadgfcapfgwb5vz2p' );
define( 'LOGGED_IN_KEY',    'qqixejkzvlpqzxfho5bfohefog9p6zh7kxpxe3fvduzaxu1fouqt8hqgdeelxsmh' );
define( 'NONCE_KEY',        'aalpo4nldkbecwcd3zma9vydvgqaie1fpyfmkmntx4b6aunwretnq3zjsam7blkj' );
define( 'AUTH_SALT',        'qoftwmdi09vd3erxysomczt6rn5aqzwtteaufy567ff7kqgh6at29tswncm9lm7w' );
define( 'SECURE_AUTH_SALT', 'ihbuiq2hh7io77ueusxlflm1gv74m7xl5mst9eqrft30yckk7mah0ecbxhuklgnr' );
define( 'LOGGED_IN_SALT',   'wx7ox8ibxw1sxtuls0j4y68cxizbbdcugxwfed5otiukbwfwhwnez7cfenek3fh9' );
define( 'NONCE_SALT',       '8t9cx1dczpysd3uvp5zvi8nfpxiexknc8gn7ka8mvyub8i74qp3uceskulj1sdli' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpmd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

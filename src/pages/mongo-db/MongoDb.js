import React from 'react';
import { Typography } from 'antd';

import styles from './MongoDb.module.scss';

const { Text } = Typography;

export default function MongoDb() {
    return <div className={styles.mongo}>
        <div className='heading1'>Mongo DB</div>
        <div className={styles.contents}>
            <div className="group">
                <div>NoSQL, document based database.</div>
                <div>Written in C++.</div>
            </div>
            <div className="group">
                <div className="heading2">Why use this?</div>
                <div>Cross-platform</div>
                <div>High performance</div>
                <div>Scalable</div>
                <div>Larger community among NoSQL databases</div>
            </div>
            <div className="group">
                <div className="heading2">commands</div>
                <div>The following commands are supported in mongo shell</div>
                <div className="heading3">Establish connection</div>
                <Text code>
                    mongo <span className="italic grey">url</span> --username <span className="italic grey">username</span>
                </Text>
                <div> This command establishes a connection to the specified database represented by the url.</div>
                <div className="heading3">Export in JSON</div>
                <Text code>
                {`mongoexport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --collection=sales --out=sales.json`}
                </Text>
                <div> This command establishes a connection to the specified database represented by the url.</div>
                <div className="heading3">Export in BSON</div>
                <Text code>
                {`mongodump --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"`}
                </Text>
                <div> This command establishes a connection to the specified database represented by the url.</div>
                <div className="heading3">Import from exported JSON</div>
                <Text code>
                {`mongoimport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --drop sales.json`}
                </Text>
                <div> This command establishes a connection to the specified database represented by the url.</div>
                <div className="heading3">Import from exported BSON</div>
                <Text code>
                {`mongorestore --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"  --drop dump`}

                </Text>
                <div> This command establishes a connection to the specified database represented by the url.</div>
            </div>
        </div>
    </div>
}
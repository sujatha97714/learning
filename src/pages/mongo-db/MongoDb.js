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
                <div className="heading3">Querying Data from DB</div>
                <Text code>
                {`show dbs`}
                </Text>
                <div> Lists all the dbs available in the cluster. Additionally admin and local databases are also shown which are maintained internally for data administrative purposes</div>
                <Text code>
                use <span className="italic grey">sample-db</span>
                </Text>
                <div> Selects the db specified. Later the selected db can be refereced simply as 'db'</div>
                <Text code>
                show collections
                </Text>
                <div> Lists all the collections available in selected db</div>
                <Text code>
                db.<span className="italic grey">collection-name</span>.find(<span className="italic grey">query-filter</span>)
                </Text>
                <div> {`Queries data from selected db's specified collection that matches the query-filter. Query filter is a JSON with field value pairs for matching documents.
                    Example, {"state": "NY"}. Although many documents could match the filter, this command results in only first 20 documents of resultant set.
                    'it' command can be used to get next 20 documents from result.`}
                </div>
                <Text code>
                it
                </Text>
                <div> {`Although many documents could match the filter, the previous command outputs only first 20 documents of resultant set.
                    'it' command can be used to get next 20 documents from result. It acts as a iterator object of cursor which is a pointer object over query results`}
                </div>
                <Text code>
                db.<span className="italic grey">collection-name</span>.find(<span className="italic grey">query-filter</span>).count()
                </Text>
                <div> {`count() outputs the count of documents in resultant set.`}
                </div>
                <Text code>
                db.<span className="italic grey">collection-name</span>.find(<span className="italic grey">query-filter</span>).pretty()
                </Text>
                <div> {`pretty() prints the output in readable, more user-friendly format`}
                </div>
            </div>
        </div>
    </div>
}
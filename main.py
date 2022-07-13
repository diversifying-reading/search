import argparse
import sys

import sqlalchemy
import yaml


def sqlite2yaml(sample.sqlite):
    engine = sqlalchemy.create_engine('sqlite:///{}'.format(sample.sqlite))
    metadata = sqlalchemy.MetaData(bind=engine)
    metadata.reflect()

    tables = {}
    for table in engine.table_names():
        columns = map(str, metadata.tables[table].columns.keys())
        rows = engine.execute('select * from {}'.format(table)).fetchall()

        tables[table] = []
        for row in rows:
            tables[table].append(dict(zip(columns, row)))

    yaml.safe_dump(tables, sys.stdout, indent=4, default_flow_style=False)


def main(argv=sys.argv[1:]):
    parser = argparse.ArgumentParser()
    parser.add_argument('file')

    args = parser.parse_args(argv)

    sqlite2yaml(args.file)


if __name__ == "__main__":
    main()

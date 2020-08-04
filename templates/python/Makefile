ALFRED_WORKFLOW_PATH ?= ~/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows
SYMLINK_TARGET = ${ALFRED_WORKFLOW_PATH}/${BUNDLE_ID}
BUNDLE_ID = {{bundle_id}}
WORKFLOW_NAME = {{kebab name}}

default: package

build:
	npm run build

package:
	rm -f ${WORKFLOW_NAME}.alfredworkflow
	cd workflow; zip -r ../${WORKFLOW_NAME}.zip *
	mv ${WORKFLOW_NAME}.zip ${WORKFLOW_NAME}.alfredworkflow

link:
	ln -sf "$(PWD)/workflow" "${SYMLINK_TARGET}"

unlink:
	rm "${SYMLINK_TARGET}"
